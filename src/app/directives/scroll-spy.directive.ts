import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
    selector: '[appScrollSpy]',
})
export class ScrollSpyDirective {
    @Input() public spiedTags = [];
    @Output() public sectionChange = new EventEmitter<string>();

    private currentSection: string;

    constructor(private elementRef: ElementRef) {}

    @HostListener('scroll', ['$event'])
    public onScroll(event: any) {
        let currentSection: string;
        const children = this.elementRef.nativeElement.children;
        const scrollTop = event.target.scrollTop;
        const parentOffset = event.target.offsetTop;

        const spied = children.filter((child) => {
            if (this.spiedTags.some((spiedTag) => spiedTag === child.tagName)) {
                if (child.offsetTop - parentOffset <= scrollTop) {
                    currentSection = child.id;
                }
            }
        });

        console.log('spy', spied);

        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    }
}
