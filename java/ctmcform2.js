
let MOTORKIRI = document.querySelector("#qtyInputMotorKIRI");
let MOTORLURUS = document.querySelector("#qtyInputMotorLURUS");
let MOTORKANAN = document.querySelector("#qtyInputMotorKANAN");
let MOBILKIRI = document.querySelector("#qtyInputMobilKIRI");
let MOBILLURUS = document.querySelector("#qtyInputMobilLURUS");
let MOBILKANAN = document.querySelector("#qtyInputMobilKANAN");
let MPUKIRI = document.querySelector("#qtyInputMpuKIRI");
let MPULURUS = document.querySelector("#qtyInputMpuLURUS");
let MPUKANAN = document.querySelector("#qtyInputMpuKANAN");
let PICKUPKIRI = document.querySelector("#qtyInputPickupKIRI");
let PICKUPLURUS = document.querySelector("#qtyInputPickupLURUS");
let PICKUPKANAN = document.querySelector("#qtyInputPickupKANAN");
let BOX = document.querySelector("#qtyInputMOBILBOX");
let BUS_KECIL = document.querySelector("#qtyInputBUS_KECIL");
let TRUK_KECILKIRI = document.querySelector("#qtyInputTrukkecilKIRI");
let TRUK_KECILLURUS = document.querySelector("#qtyInputTrukkecilLURUS");
let TRUK_KECILKANAN = document.querySelector("#qtyInputTrukkecilKANAN");
let BUS_BESAR = document.querySelector("#qtyInputBUS_BESAR");
let TRUK_BESARKIRI = document.querySelector("#qtyInputTrukbesarKIRI");
let TRUK_BESARLURUS = document.querySelector("#qtyInputTrukbesarLURUS");
let TRUK_BESARKANAN = document.querySelector("#qtyInputTrukbesarKANAN");
let TRUK_TANGKI = document.querySelector("#qtyInputTRUK_TANGKI");
let UM = document.querySelector("#qtyInputUM");
const scriptURL = 'https://script.google.com/macros/s/AKfycbxgOum9zvT78oNm_rTXK_zP5QiSR3IfW_rgp1m2ErcX5eKSF3N0CBnu0XLJLfGr66T4/exec'
const form = document.forms['contact-form']

function decrementUM(){
    if (UM.value <=0){
        UM.value = 0;
    } else {
        UM.value = parseInt(UM.value) - 1;
    }
}
function incrementUM(){
    UM.value = parseInt(UM.value) + 1;
}
function decrementTRUK_TANGKI(){
    if (TRUK_TANGKI.value <=0){
        TRUK_TANGKI.value = 0;
    } else {
        TRUK_TANGKI.value = parseInt(TRUK_TANGKI.value) - 1;
    }
}
function incrementTRUK_TANGKI(){
    TRUK_TANGKI.value = parseInt(TRUK_TANGKI.value) + 1;
}

function decrementtrukbesarKIRI(){
    if (TRUK_BESARKIRI.value <=0){
        TRUK_BESARKIRI.value = 0;
    } else {
        TRUK_BESARKIRI.value = parseInt(TRUK_BESARKIRI.value) - 1;
    }
}
function incrementtrukbesarKIRI(){
    TRUK_BESARKIRI.value = parseInt(TRUK_BESARKIRI.value) + 1;
}
function decrementtrukbesarLURUS(){
    if (TRUK_BESARLURUS.value <=0){
        TRUK_BESARLURUS.value = 0;
    } else {
        TRUK_BESARLURUS.value = parseInt(TRUK_BESARLURUS.value) - 1;
    }
}
function incrementtrukbesarLURUS(){
    TRUK_BESARLURUS.value = parseInt(TRUK_BESARLURUS.value) + 1;
}
function decrementtrukbesarKANAN(){
    if (TRUK_BESARKANAN.value <=0){
        TRUK_BESARKANAN.value = 0;
    } else {
        TRUK_BESARKANAN.value = parseInt(TRUK_BESARKANAN.value) - 1;
    }
}
function incrementtrukbesarKANAN(){
    TRUK_BESARKANAN.value = parseInt(TRUK_BESARKANAN.value) + 1;
}

function decrementBUS_BESAR(){
    if (BUS_BESAR.value <=0){
        BUS_BESAR.value = 0;
    } else {
        BUS_BESAR.value = parseInt(BUS_BESAR.value) - 1;
    }
}
function incrementBUS_BESAR(){
    BUS_BESAR.value = parseInt(BUS_BESAR.value) + 1;

}

function decrementtrukkecilKIRI(){
    if (TRUK_KECILKIRI.value <=0){
        TRUK_KECILKIRI.value = 0;
    } else {
        TRUK_KECILKIRI.value = parseInt(TRUK_KECILKIRI.value) - 1;
    }
}
function incrementtrukkecilKIRI(){
    TRUK_KECILKIRI.value = parseInt(TRUK_KECILKIRI.value) + 1;
}
function decrementtrukkecilLURUS(){
    if (TRUK_KECILLURUS.value <=0){
        TRUK_KECILLURUS.value = 0;
    } else {
        TRUK_KECILLURUS.value = parseInt(TRUK_KECILLURUS.value) - 1;
    }
}
function incrementtrukkecilLURUS(){
    TRUK_KECILLURUS.value = parseInt(TRUK_KECILLURUS.value) + 1;
}
function decrementtrukkecilKANAN(){
    if (TRUK_KECILKANAN.value <=0){
        TRUK_KECILKANAN.value = 0;
    } else {
        TRUK_KECILKANAN.value = parseInt(TRUK_KECILKANAN.value) - 1;
    }
}
function incrementtrukkecilKANAN(){
    TRUK_KECILKANAN.value = parseInt(TRUK_KECILKANAN.value) + 1;
}

function decrementmotorKIRI(){
    if (MOTORKIRI.value <=0){
        MOTORKIRI.value = 0;
    } else {
        MOTORKIRI.value = parseInt(MOTORKIRI.value) - 1;
    }
}
function incrementmotorKIRI(){
    MOTORKIRI.value = parseInt(MOTORKIRI.value) + 1;
}
function decrementmotorLURUS(){
    if (MOTORLURUS.value <=0){
        MOTORLURUS.value = 0;
    } else {
        MOTORLURUS.value = parseInt(MOTORLURUS.value) - 1;
    }
}
function incrementmotorLURUS(){
    MOTORLURUS.value = parseInt(MOTORLURUS.value) + 1;
}
function decrementmotorKANAN(){
    if (MOTORKANAN.value <=0){
        MOTORKANAN.value = 0;
    } else {
        MOTORKANAN.value = parseInt(MOTORKANAN.value) - 1;
    }
}
function incrementmotorKANAN(){
    MOTORKANAN.value = parseInt(MOTORKANAN.value) + 1;
}
// ------------------
function decrementmobilKIRI(){
    if (MOBILKIRI.value <=0){
        MOBILKIRI.value = 0;
    } else {
        MOBILKIRI.value = parseInt(MOBILKIRI.value) - 1;
    }
}
function incrementmobilKIRI(){
    MOBILKIRI.value = parseInt(MOBILKIRI.value) + 1;
}
function decrementmobilLURUS(){
    if (MOBILLURUS.value <=0){
        MOBILLURUS.value = 0;
    } else {
        MOBILLURUS.value = parseInt(MOBILLURUS.value) - 1;
    }
}
function incrementmobilLURUS(){
    MOBILLURUS.value = parseInt(MOBILLURUS.value) + 1;
}
function decrementmobilKANAN(){
    if (MOBILKANAN.value <=0){
        MOBILKANAN.value = 0;
    } else {
        MOBILKANAN.value = parseInt(MOBILKANAN.value) - 1;
    }
}
function incrementmobilKANAN(){
    MOBILKANAN.value = parseInt(MOBILKANAN.value) + 1;
}

function decrementmpuKIRI(){
    if (MPUKIRI.value <=0){
        MPUKIRI.value = 0;
    } else {
        MPUKIRI.value = parseInt(MPUKIRI.value) - 1;
    }
}
function incrementmpuKIRI(){
    MPUKIRI.value = parseInt(MPUKIRI.value) + 1;
}
function decrementmpuLURUS(){
    if (MPULURUS.value <=0){
        MPULURUS.value = 0;
    } else {
        MPULURUS.value = parseInt(MPULURUS.value) - 1;
    }
}
function incrementmpuLURUS(){
    MPULURUS.value = parseInt(MPULURUS.value) + 1;
}
function decrementmpuKANAN(){
    if (MPUKANAN.value <=0){
        MPUKANAN.value = 0;
    } else {
        MPUKANAN.value = parseInt(MPUKANAN.value) - 1;
    }
}
function incrementmpuKANAN(){
    MPUKANAN.value = parseInt(MPUKANAN.value) + 1;
}

function decrementpickupKIRI(){
    if (PICKUPKIRI.value <=0){
        PICKUPKIRI.value = 0;
    } else {
        PICKUPKIRI.value = parseInt(PICKUPKIRI.value) - 1;
    }
}
function incrementpickupKIRI(){
    PICKUPKIRI.value = parseInt(PICKUPKIRI.value) + 1;
}
function decrementpickupLURUS(){
    if (PICKUPLURUS.value <=0){
        PICKUPLURUS.value = 0;
    } else {
        PICKUPLURUS.value = parseInt(PICKUPLURUS.value) - 1;
    }
}
function incrementpickupLURUS(){
    PICKUPLURUS.value = parseInt(PICKUPLURUS.value) + 1;
}
function decrementpickupKANAN(){
    if (PICKUPKANAN.value <=0){
        PICKUPKANAN.value = 0;
    } else {
        PICKUPKANAN.value = parseInt(PICKUPKANAN.value) - 1;
    }
}
function incrementpickupKANAN(){
    PICKUPKANAN.value = parseInt(PICKUPKANAN.value) + 1;
}

function decrementmobilbox(){
    if (BOX.value <=0){
        BOX.value = 0;
    } else {
        BOX.value = parseInt(BOX.value) - 1;
    }
}
function incrementmobilbox(){
    BOX.value = parseInt(BOX.value) + 1;
}
function decrementBUS_KECIL(){
    if (BUS_KECIL.value <=0){
        BUS_KECIL.value = 0;
    } else {
        BUS_KECIL.value = parseInt(BUS_KECIL.value) - 1;
    }
}
function incrementBUS_KECIL(){
    BUS_KECIL.value = parseInt(BUS_KECIL.value) + 1;
}
form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Inisialisasi dan tampilkan modal loading secara programmatic
    const modalElement = document.getElementById('loadingModal');
    const loadingModal = new bootstrap.Modal(modalElement);
    loadingModal.show();

    // Kirim data ke Google Sheets via fetch
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
        // Berhasil terkirim, langsung muat ulang halaman ke kondisi awal (nol)
        window.location.reload();
    })
    .catch(error => {
        loadingModal.hide();
        console.error('Error!', error.message);
        alert('Terjadi kesalahan saat mengirim data. Silakan coba lagi.');
    });
});