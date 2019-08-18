import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'stk-visiting-form',
    templateUrl: './visitingForm.component.html',
    styleUrls: ['./visitingForm.component.scss']
})

export class VisitingFormComponent implements OnInit {

    defaultImage = "";
    stkCityLayer = "/assets/images/stk-city-layer.jpg";
    stkFamily = "/assets/images/stk-family.jpg";
    offset = 1;

    visitingForm: FormGroup;
    confirmation: string = '';
    loading: boolean = false;

    constructor(
        private fb: FormBuilder,
        private afs: AngularFirestore
    ) {
        this.visitingForm = fb.group({
            nome: ['', Validators.required],
            celular: ['', Validators.required],
            igreja: [''],
            ondeConheceu: ['', Validators.required],
            pedido: ['', Validators.required],
        });
    }

    ngOnInit() {
        this.confirmation = '';
    }

    sendForm() {
        const id = this.makeUniqueId(15)
        this.loading = true;
        this.afs.collection('STK_VisitingForm').doc(id).set(this.visitingForm.value)
            .then(() => {
                this.visitingForm.reset();
                this.confirmation = 'Dados e informações enviadas com sucesso.';
                this.loading = false;
            })
            .catch(() => this.confirmation = 'Erro no servidor. Por favor, tente novamente mais tarde')
    }

    makeUniqueId(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

}