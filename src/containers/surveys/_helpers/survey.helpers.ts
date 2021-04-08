
export const getFormFromId = (forms: any[], id: string) => {
    let form = forms.filter((form: any) => parseInt(form.id) === parseInt(id));
    if (form.length > 0) {
        return form[0]
    }
    return {};
};
