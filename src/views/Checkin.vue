<script setup>
    import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
    import NewsSingle from '../components/NewsSingle.vue';
    import NewsForm from '../components/NewsForm.vue';
</script>

<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Check In</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding">
        <ion-button @click="startScan" :disabled="isScanning">Pokreni skener</ion-button>
        
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
  