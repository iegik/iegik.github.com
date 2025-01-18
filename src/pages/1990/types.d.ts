import '../../types.d.ts';

// XHTML Basic 1.1
interface ViewProps {
  services?: string[];
  tag?:
    | 'p' | 'br' | 'span' | 'strong' | 'em' | 'b' | 'i' | 'u' | 'big' | 'small' | 'abbr' | 'cite' | 'dfn' | 'code' | 'samp' | 'kbd' | 'var'
    | 'ul' | 'ol' | 'li' | 'dl' | 'dt' | 'dd'
    | 'a'
    | 'img' | 'object' | 'param'
    | 'table' | 'caption' | 'thead' | 'tbody' | 'tfoot' | 'tr' | 'th' | 'td'
    | 'form' | 'input' | 'select' | 'option' |  'textarea' | 'label' | 'fieldset' | 'legend'
    | 'div'
  ;
  className?: string;
  children?: ReactNode
  component?: string;
}
