<script setup>
    import { IonCard, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/vue';
</script>

<template>
    <ion-page>
      <ion-header>
        <ion-toolbar style="--background:#220e0f">
          <ion-title>Check In</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding" style=" --background: url('../../public/banner2.png') 0 0/100% 100% no-repeat; text-align: center;">
        <ion-button @click="startScan" :disabled="isScanning" style="margin: 100px auto; padding: 20px 0; font-size: xx-large !important;" >Pokreni skener</ion-button>
        
        <div v-if="result" class="qr-result">
          <p>{{ result }}</p>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
  import { IonButton, IonPage } from '@ionic/vue';
  import { mapActions } from 'vuex';
  export default {
    data() {
      return {
        result: '',
        isScanning: false
      };
    },
    components: {
      IonPage,
      IonCard,
      IonContent,
      IonHeader
    },
    methods: {
      ...mapActions('auth', ['checkin']),
      startScan() {
        if (this.isScanning) return;
        this.isScanning = true;
  
        // Check for permission to use the camera
        const status = BarcodeScanner.checkPermission({ force: true });
        
          // Hide the background to allow camera scanning
          BarcodeScanner.hideBackground();
  
          // Start the scanning
          BarcodeScanner.startScan().then(result => {
            if (result.hasContent) {
              this.result = result.content; // Display the QR code result
              this.checkin({lecture_id: parseInt(result.content)});
            }
            this.stopScan();
          }).catch(err => {
            console.error('Error scanning QR code:', err);
            this.stopScan();
          });

      },
      stopScan() {
        this.isScanning = false;
        BarcodeScanner.stopScan();
        BarcodeScanner.showBackground();
      }
    },
    beforeUnmount() {
      // Stop the scanner when the component is destroyed
      this.stopScan();
    }
  };
  </script>
  
  <style scoped>
  .qr-result {
    margin-top: 20px;
    font-size: 18px;
    color: #88383b;
  }
  </style>
  