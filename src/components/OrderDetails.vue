<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="end">
                <ion-button color="medium" @click="cancel">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </ion-button>
            </ion-buttons>
            <ion-title>تفاصيل الطلب</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <div class="relative h-full">
<div class="details">
            <!-- order table -->
            <div
                class="flex items-center justify-between p-4 border-b border-gray-300"
            >
                <h2 class="font-semibold">صاحب الطلب</h2>

                <h2 class="">صيدليه شاويش</h2>
            </div>

            <!--  -->
            <div
                class="flex items-center justify-between p-4 border-b border-gray-300"
            >
                <h2 class="font-semibold">عنوان الاستلام</h2>

                <h2 class="">شرق النيل حي النصر</h2>
            </div>

            <!--  -->

            <div
                class="flex items-center justify-between p-4 border-b border-gray-300"
            >
                <h2 class="font-semibold">عنوان التسليم</h2>

                <h2 class="">مايو سوق 6 الجديد</h2>
            </div>

            <!--  -->

            <div
                class="flex items-center justify-between p-4 border-b border-gray-300"
            >
                <h2 class="font-semibold">رقم هاتف الزبون</h2>

                <h2 class="">0125803725</h2>
            </div>

            <!--  -->

            <div
                class="flex items-center justify-between p-4 border-b border-gray-300"
            >
                <h2 class="font-semibold">اسم المستلم</h2>

                <h2 class="">احمد عادل</h2>
            </div>

             <!--  -->

            <div
                class="flex items-center justify-between p-4 border-b border-gray-300"
            >
                <h2 class="font-semibold">ملاحظات </h2>

                <h2 class="">العرس وجب يا جماعه بعد دا </h2>
            </div>
        </div>
        
        <div class="flex w-full items-center absolute bottom-2">
            <button class="bg-green-600 text-white p-4 rounded mx-1 w-full" @click="acceptOrder()">
                قبول الطلب
            </button>

                <button class="bg-red-600 text-white p-4 rounded mx-1 w-full" @click="delOrder()">
                رفض الطلب 
            </button>
        </div>
        </div>
        
    </ion-content>
</template>

<script>
import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    modalController,
    toastController
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
    name: "OrderDetails",
    components: {
        IonContent,
        IonHeader,
        IonTitle,
        IonToolbar,
        IonButtons,
        IonButton,
    },
    methods: {
        cancel() {
            return modalController.dismiss(null, "cancel");
        },
         async acceptOrder() {
      const toast = await toastController
        .create({
          message: 'تم قبول الطلب بنجاح',
          duration: 2000,
          position:"top",
          color : "success"
        })
        modalController.dismiss(null, "cancel");
      return toast.present();
    },
        async delOrder() {
      const toast = await toastController
        .create({
          message: 'تم رفض الطلب بنجاح',
          duration: 2000,
          position:"top",
          color : "danger"
        })
        modalController.dismiss(null, "cancel");

      return toast.present();
    },
    },
});
</script>
