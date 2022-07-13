<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title size="large"> الطلبات</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <!-- List of Text Items -->
            <ion-list class="py-2">
                <ion-item class="py-2" :key="item" v-for="item in 5">
                    <div class="flex items-center justify-between w-full">
                        <!-- from => to -->
                        <div class="form-to" @click="openModal">
                            <h2 class="font-semibold py-1">صاحب الطلب :</h2>
                            <h2 class="font-semibold py-1">من :</h2>
                            <h2 class="font-semibold py-1">الي :</h2>
                        </div>

                        <!-- addresses -->
                        <div class="adrress" @click="openModal">
                            <h2 class="py-1">صيدليه شاويش</h2>
                            <h2 class="py-1">شرق النيل حي النصر</h2>
                            <h2 class="py-1">مايو سوق 6 الجديد</h2>
                        </div>

                        <!-- badge for accept -->
                        <div class="icons flex">
                            <svg
                            @click="accept()"
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-9 w-9 text-green-600 mx-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>

                            <svg
                            @click="del()"
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-9 w-9 text-red-600 mx-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                    </div>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonList,IonItem ,modalController,toastController} from '@ionic/vue';
import OrderDetails from '@/components/OrderDetails.vue';

export default  defineComponent({
  name: 'Tab1Page',
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage,IonList,IonItem },
    methods: {

    async accept() {
      const toast = await toastController
        .create({
          message: 'تم قبول الطلب بنجاح',
          duration: 2000,
          position:"top",
          color : "success"
        })
      return toast.present();
    },
        async del() {
      const toast = await toastController
        .create({
          message: 'تم رفض الطلب بنجاح',
          duration: 2000,
          position:"top",
          color : "danger"
        })
      return toast.present();
    },

     async openModal() {
        const modal = await modalController.create({
          component: OrderDetails,
        });
        modal.present();

        const { role } = await modal.onWillDismiss();

        if (role === 'confirm') {
          console.log("conf");
          
  }
     }
      },
});
</script>
