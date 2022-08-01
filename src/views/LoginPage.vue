<template>
  <ion-page>
    <div class="min-h-screen py-6 px-2">
   

      <!-- reg altert -->
      
      <div class="relative py-1 sm:max-w-xl sm:mx-auto">

        
        <div class="relative px-4  sm:rounded-3xl sm:p-20">
          <div class="max-w-md mx-auto">
            <div>
                            <h1 class="text-2xl font-semibold text-center">تسجيل الدخول</h1>

            </div>
            <div class="">
              <div
                class=" text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div class="floating-input mb-5 relative">
                  <input
                    type="text"
                    id="email"
                    v-model="email"
                    class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                    placeholder=" "
                    autocomplete="off"
                  />
                  <label
                    for="email"
                    class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                    >الايميل</label
                  >
                </div>
                <div class="floating-input mb-5 relative">
                  <input
                    type="password"
                    v-model="password"
                    id="password"
                    class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                    placeholder=" "
                    autocomplete="off"
                  />
                  <label
                    for="email"
                    class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                    >كلمه السر</label
                  >
                </div>
                <div class="relative">
                  <button
                  v-if="loginLoad"
                    @click="login()"
                    class="bg-violet-600 w-full p-2 text-white rounded text-xl"
                  >
                    تسجيل الدخول

                  </button>
                           <button
                  v-if="!loginLoad"
                    @click="login()"
                    class="bg-violet-400 w-full py-2 text-white rounded text-xl flex justify-center items-center"
                  >
                  
                    <span class="ml-7">
                        جاري تسجيل الدخول
                    </span>
<span class="loader -mt-3"></span>
                  </button>
                  <p class="text-center py-2">
                  
                  ليس لديك حساب ??
                            <router-link to="/RegisterPage">
              
                      تسجيل حساب جديد
                  </router-link>
                  </p>
        
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ion-page>
</template>

<script>
import { IonPage , alertController } from "@ionic/vue";

import axios from "axios";
export default {
  components: { IonPage },
  data() {
    return {
      empty: false,
      email: "",
      password: "",
      loginLoad:true,
      // log: {
      //   email: "user41@gmail.com",
      //   password: "2",
      // },
    };
  },
 
  methods: {
    async login() {
      this.loginLoad = false
      if (this.email == "" && this.password == "") {
      this.loginLoad = true

        this.failed()
      } else {
        try {
          const userData = { email: this.email, password: this.password };
          const res = await axios.post(
            "http://localhost:3000/api/auth/login",
            userData
          );
          console.log(res.data);
          if (res.data.success) {
      this.loginLoad = true
            this.$router.push("/tabs/HomePage");
          } else {
            
      this.loginLoad = true

            this.wrong()
          }
        } catch (error) {
                this.loginLoad = true

          console.error(error);
            this.wrong()
          // expected output: ReferenceError: nonExistentFunction is not defined
          // Note - error messages will vary depending on browser
        }
      }
    },
       async failed() {
      const alert = await alertController
        .create({
          cssClass: 'success-alert',
          message:' <div class="flex flex-col justify-center items-center text-center"><div class="f-modal-icon f-modal-error animate"><span class="f-modal-x-mark"> <span class="f-modal-line f-modal-left animateXLeft"></span><span class="f-modal-line f-modal-right animateXRight"></span> </span><div class="f-modal-placeholder"></div><div class="f-modal-fix"></div></div><h2 class="font-semibold"> الرجاء ملء كل الحقول   </h2></div>',
          buttons: ['تم'],
        });
      await alert.present();
      const { role } = await alert.onDidDismiss();
      console.log(role)
    },
      async wrong() {
      const alert = await alertController
        .create({
          cssClass: 'success-alert',
          message:' <div class="flex flex-col justify-center items-center text-center"><div class="f-modal-icon f-modal-error animate"><span class="f-modal-x-mark"> <span class="f-modal-line f-modal-left animateXLeft"></span><span class="f-modal-line f-modal-right animateXRight"></span> </span><div class="f-modal-placeholder"></div><div class="f-modal-fix"></div></div><h2 class="font-semibold">   اسم المستخدم او كلمه المرور خاطئه    </h2></div>',
          buttons: ['تم'],
        });
      await alert.present();
      const { role } = await alert.onDidDismiss();
      console.log(role)
    },
  },
};
</script>

<style></style>
