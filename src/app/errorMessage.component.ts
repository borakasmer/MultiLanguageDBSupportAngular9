import { Component, ChangeDetectionStrategy, Input, OnInit, SimpleChanges } from '@angular/core';
import { Languages } from './Enum';
import { CourseService } from './Services/courseService';
@Component({
    selector: 'error',
    templateUrl: './errorMessage.component.html',
    styleUrls: ['./errorMessage.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorMessageComponent implements OnInit {
    @Input() languageId: Languages = Languages.Turkish;
    @Input() id: string;

    text: string = "default valaue";
    constructor(private service: CourseService) { }
    ngOnInit() {
        this.text = this.service.GetErrortext(this.id, this.languageId);

        console.log("Language:" + this.languageId);
        console.log("id:" + this.id);
    }
    ngOnChanges(changes: SimpleChanges) {
        if (changes.languageId) {
            this.text = this.service.GetErrortext(this.id, this.languageId);
        }
    }
}