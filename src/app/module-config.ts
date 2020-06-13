import { ActivatedRoute } from '@angular/router';
import { FormGroup, AbstractControl, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SaveChangesComponent } from './dashboard/save-changes/save-changes.component';
import { GuildService } from './services/guild.service';
import {  OnDestroy } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { Subscription } from 'rxjs';
import { UserService } from './services/user.service';


export abstract class ModuleConfig implements OnDestroy {
    abstract moduleName: string;

    form: FormGroup;
    hasPremium = false;

    guild: any;
    savedGuild: any;
    originalSavedGuild: any;

    channels: any = [];
    textChannels: any = [];
    roles: any = [];

    private saveChanges$: Subscription;  
    private valueChanges$: Subscription;

    get guildId() { return this.route.snapshot.paramMap.get('id'); }
  
    constructor(
        protected guildService: GuildService,
        protected route: ActivatedRoute,
        protected userService: UserService,
        public saveChanges: MatSnackBar) {}

    /**
     * Load all required data for the form, and hook events.
     */
    async init() {
        const data = this.route.snapshot.data;
        this.hasPremium = this.userService.savedUser.premium;
        
        this.guild = this.guildService.guilds.find(g => g.id === this.guildId);

        this.roles = data.roles;
        this.channels = data.channels;
        this.textChannels = data.channels.filter(c => c.type === 'text');

        this.savedGuild = data.savedGuild;
        this.originalSavedGuild = JSON.parse(JSON.stringify(this.savedGuild));
        
        await this.resetForm();

        this.valueChanges$ = this.form.valueChanges
            .subscribe(() => this.openSaveChanges());         
    }

    private async resetForm() {     
        this.savedGuild = JSON.parse(JSON.stringify(this.originalSavedGuild));   
        this.form = await this.buildForm(this.savedGuild);
        this.form.addControl('enabled',
            new FormControl(this.savedGuild[this.moduleName].enabled));
    }

    /**
     * Build the form to be used.
     * Called when on form init.
     */
    abstract buildForm(savedGuild: any): FormGroup | Promise<FormGroup>;
    
    private openSaveChanges() {        
        const snackBarRef = this.saveChanges._openedSnackBarRef;
        if (!this.form.valid || snackBarRef) return;

        this.saveChanges$ = this.saveChanges.openFromComponent(SaveChangesComponent)
            .afterOpened()
            .subscribe(() => {
                const component = this.saveChanges.
                    _openedSnackBarRef.instance as SaveChangesComponent;

                component.onSave.subscribe(async() => await this.submit());
                component.onReset.subscribe(async() => await this.reset());
            });
    }

    /**
     * Clean up subscriptions - to prevent memory leak.
     */    
    ngOnDestroy() {        
        this.valueChanges$?.unsubscribe();
        this.saveChanges$?.unsubscribe();
    }

    /**
     * Send the form data to the API.
     */
    async submit() {
        try {
            if (!this.form.valid) return;

            this.filterFormValue();
            
            await this.guildService.saveGuild(this.guildId, this.moduleName, this.form.value);
        } catch {
            console.log(this.form.value);
        }
    }

    
    /**
     * Filter unnecessary form data; called before submit.
     */
    filterFormValue() {}

    /**
     * Reset form values, and rebuild form.
     */
    async reset() {
        await this.resetForm();
        
        this.form.valueChanges
            .subscribe(() => this.openSaveChanges()); 
    }

    // input events

    add(event: MatChipInputEvent, array: any[]) {        
        const { value, input } = event;
    
        if ((value || '').trim())
          array.push(value.trim());
    
        if (input) 
          input.value = '';

        this.openSaveChanges();
    }
    
    remove(item: any, array: any[]) {
        const index = array.indexOf(item);
        if (index >= 0)
            array.splice(index, 1);
        
        this.openSaveChanges();
    }

    getChannel(id: string) {
        return this.channels.find(c => c.id === id);
    }
}