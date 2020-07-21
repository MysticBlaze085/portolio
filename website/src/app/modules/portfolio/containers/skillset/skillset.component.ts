import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ISectionTitleConfig } from '../../../../interfaces/section-title.interface';
import { SkillsetConfig } from './skillset.config';

@Component({
    selector: 'app-skillset',
    templateUrl: './skillset.component.html',
    styleUrls: ['./skillset.component.scss'],
})
export class SkillsetComponent implements OnInit {
    sectionTitleConfig: ISectionTitleConfig = { title: 'Skillset' };
    skillsetData: { title: string; items: string[] }[] = SkillsetConfig;
    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.firstFormGroup = this.formBuilder.group({
            firstCtrl: ['', Validators.required],
        });
        this.secondFormGroup = this.formBuilder.group({
            secondCtrl: ['', Validators.required],
        });
    }
}
