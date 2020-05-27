import { Component, ChangeDetectionStrategy, Input, OnInit, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Languages } from './Enum';
import { CourseService } from './Services/courseService';
@Component({
    selector: 'button-lng',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
    @Input() languageId: Languages = Languages.Turkish;
    @Input() id: string;
    @Input() css: string = "";
    @Input() width: string = "";
    @Output() click = new EventEmitter();

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
    reverseBack()
    {
        this.click.emit();
    }
}