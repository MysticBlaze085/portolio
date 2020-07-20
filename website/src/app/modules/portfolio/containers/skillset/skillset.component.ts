import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ISectionTitleConfig } from '../../../../interfaces/section-title.interface';

@Component({
    selector: 'app-skillset',
    templateUrl: './skillset.component.html',
    styleUrls: ['./skillset.component.scss'],
})
export class SkillsetComponent implements OnInit {
    sectionTitleConfig: ISectionTitleConfig = { title: 'Skillset' };
    skillsetData: { title: string; items: string[] }[] = [
        { title: 'Design Skills', items: ['Adobe Photoshop', 'Adobe Illustrator'] },
        {
            title: 'Front End Developement Skills',
            items: [
                'Agile',
                'Angular 6+',
                'Bitbucket',
                'Bootstrap',
                'CSS3',
                'Git',
                'HTML5',
                'Jasmine Unit Testing',
                'JavaScript',
                'jQuery',
                'Material Design',
                'MEAN Stack',
                'MySQL | SQL | DB2 | MongoDB | AWS | Firebase',
            ],
        },
        {
            title: 'Personal Skills',
            items: ['Basketball', 'Gaming', 'Martial Arts', 'Snoozing', 'Studying'],
        },
    ];
    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;

    constructor(private _formBuilder: FormBuilder) {}

    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required],
        });
    }
}
