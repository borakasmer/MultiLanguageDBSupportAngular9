import { Component, ChangeDetectionStrategy, Input, OnInit, SimpleChanges } from '@angular/core';
import { Languages } from './Enum';
import { CourseService } from './Services/courseService';
@Component({
    selector: 'label-lng',
    templateUrl: './label.component.html',
    styleUrls: ['./label.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelComponent implements OnInit {
    @Input() languageId: Languages = Languages.Turkish;
    @Input() id: string;
    @Input() isRequired: boolean = false;

    text: string = "default valaue";
    constructor(private service: CourseService) { }
    ngOnInit() {
        this.text = this.service.GetLabelText(this.id, this.languageId);

        console.log("Language:" + this.languageId);
        console.log("id:" + this.id);
    }
    ngOnChanges(changes: SimpleChanges) {
        if (changes.languageId) {
            this.text = this.service.GetLabelText(this.id, this.languageId);
        }
    }
}