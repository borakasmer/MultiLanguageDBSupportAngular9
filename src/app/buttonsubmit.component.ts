import { Component, ChangeDetectionStrategy, Input, OnInit, SimpleChanges } from '@angular/core';
import { Languages } from './Enum';
import { CourseService } from './Services/courseService';
@Component({
    selector: 'buttonSubmit-lng',
    templateUrl: './buttonsubmit.component.html',
    styleUrls: ['./buttonsubmit.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonSubmitComponent implements OnInit {
    @Input() languageId: Languages = Languages.Turkish;
    @Input() id: string;
    @Input() css: string = "";
    @Input() disabled: boolean = true;    

    text: string = "default valaue";
    constructor(private service: CourseService) { }
    ngOnInit() {
        this.text = this.service.GetButtonText(this.id, this.languageId);

        console.log("Language:" + this.languageId);
        console.log("id:" + this.id);
    }
    ngOnChanges(changes: SimpleChanges) {
        if (changes.languageId) {
            this.text = this.service.GetButtonText(this.id, this.languageId);
        }
    }
}