<script setup>
    import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
    import NewsSingle from '../components/NewsSingle.vue';
    import NewsForm from '../components/NewsForm.vue';
</script>

<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Checkin</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding">
        <ion-button @click="startScan" :disabled="isScanning">Scan QR Code</ion-button>
        
        <div v-if="qrCodeResult" class="qr-result">
          <p>QR Code Contents:</p>
          <p>{{ qrCodeResult }}</p>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
  
  export default {
    data() {
      return {
        qrCodeResult: null,
        isScanning: false
      };
    },
    methods: {
      async startScan() {
        if (this.isScanning) return;
        this.isScanning = true;
  
        // Check for permission to use the camera
        const status = await BarcodeScanner.checkPermission({ force: true });
  
        if (status.granted) {
          // Hide the background to allow camera scanning
          BarcodeScanner.hideBackground();
  
          // Start the scanning
          BarcodeScanner.startScan().then(result => {
            if (result.hasContent) {
              this.qrCodeResult = result.content; // Display the QR code result
            }
            this.stopScan();
          }).catch(err => {
            console.error('Error scanning QR code:', err);
            this.stopScan();
          });
        } else {
          console.log('Camera permission not granted');
          this.isScanning = false;
        }
      },
      stopScan() {
        this.isScanning = false;
        BarcodeScanner.stopScan();
        BarcodeScanner.showBackground();
      }
    },
    beforeDestroy() {
      // Stop the scanner when the component is destroyed
      this.stopScan();
    }
  };
  </script>
  
  <style scoped>
  .qr-result {
    margin-top: 20px;
    font-size: 18px;
    color: #333;
  }
  </style>
  