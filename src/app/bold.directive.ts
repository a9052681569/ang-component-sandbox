import { Directive, HostBinding, Input, OnInit } from '@angular/core'

@Directive({
  selector: '[bold]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class BoldDirective {
    @Input('bold') selectedSize:string
    
    private defaultSize: string
    private fontSize: string
    private fontWeight = 'normal'

    ngOnInit() {
        this.defaultSize = this.fontSize
    }
    
    @HostBinding('style.fontSize') get getFontSize() {
        return this.fontSize
    }
    @HostBinding('style.fontWeight') get getFontWeight() {
        return this.fontWeight
    }

    @HostBinding('style.cursor') get getCursor() {
        return 'pointer'
    }

    onMouseEnter() {
        this.fontWeight = 'bold'
        this.fontSize = this.selectedSize
    }

    onMouseLeave() {
        this.fontWeight = 'normal'
        this.fontSize = this.defaultSize
    }
}