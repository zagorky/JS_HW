'use strict'
export class Form{
    constructor(anyForm){
        this.thisForm = anyForm;
    }
    createFormHTML(){
        let form = document.createElement('form');
        form.setAttribute("action", "");
        form.setAttribute("method","POST");
        document.body.append(form);
        let tag;
        let parentTag = form;
        for(let [key,value] of Object.entries(this.thisForm))
        {
            let p = document.createElement("p");
            form.append(p);
            for( let[keyElemForm,valueElemForm] of Object.entries(value))
            {
                if ( keyElemForm == "parentTag") 
                {
                    parentTag = document.querySelector(`${valueElemForm}`);

                }
                else if (keyElemForm == "tagName")
                {
                    tag = document.createElement(`${valueElemForm}`);
                }
                else if (keyElemForm == "textTag" )
                {
                    if ( tag.type == "radio" || tag.type == "checkbox")
                    {
                        let span = document.createElement("span");
                        span.textContent = valueElemForm;
                        form.append(span);
                    }
                    else tag.textContent = valueElemForm;
                }
                else {
                    tag.setAttribute(`${keyElemForm}`, `${valueElemForm}`);
            }
        }
        parentTag.append(tag);
        parentTag = form;
        form.append(p);
    }
    let submit = document.createElement('button');
    submit.setAttribute("type","submit");
    submit.textContent = 'send';
    submit.setAttribute("id","send");
    submit.setAttribute("class", "button");
    form.append(submit);
}
}