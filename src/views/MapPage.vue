<template>
    <ion-page>
        
        <ion-content :fullscreen="true">
            <div class="flex justify-between items-center p-4 border-b border-gray-300">
                <h2>
                    تفعيل الحساب
                </h2>
                  <ion-toggle :checked="active=false" color="primary"></ion-toggle>

            </div>

            <div class="h-full flex flex-col items-center justify-center">
                <p>
                    الرجاء تفعيل الحساب لعرض الخريطه
                </p>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage,IonContent,IonToggle } from '@ionic/vue';
export default  defineComponent({
  name: 'Tab1Page',
  components: {  IonContent, IonPage ,IonToggle},
  data(){
      return{
          active:true
      }
  }

});
</script>
