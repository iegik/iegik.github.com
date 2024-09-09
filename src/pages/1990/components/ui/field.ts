export type FieldProps = { name: string, rows?: number, cols?: number }
export type FieldL10nProps = { l10n: (key: string) => string }
export type FormFieldProps = {
    kind?: 'horizontal' | 'vertical';
    data?: any[];
    type?: 'hidden' | 'text' | 'memo' | 'checkbox' | 'radio' | 'email' | 'select' | 'submit';
    value?: string;
    required?: boolean;
}

export const Field = ({ name, rows, cols, data, type: fieldType, value = '', required, l10n }: FieldProps & FormFieldProps & FieldL10nProps) => {
  const id = name;
  const isRequired = required ? `required` : ''
  if (data) return `<select id="${id}" name="${name}" ${isRequired}>
                                                              <option></option>
                                                              ${data.map((key) => `<option value="${key}">${l10n(key)}</option>`).join('\n')}
                                                          </select>`
  if (!!rows || !!cols) return `<table width="100%">
                                                          <tr>
                                                              <td>
                                                                  <textarea id="${id}" name="${name}" rows="${rows}" cols="${cols}" ${isRequired}>${value}</textarea>
                                                      </table>`
  return `<input type="${fieldType || 'text'}" id="${id}" name="${name}" value="${value}" ${isRequired} />`
}
