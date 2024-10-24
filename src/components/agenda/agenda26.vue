<template>
    <table>
        <thead>
            <tr>
                <th style="border-bottom: 2px solid #454545;">Vreme</th>
                <th style="border-left: 2px solid #454545; border-bottom: 2px solid #454545;">Događaj</th>
            </tr>
        </thead>
        <tbody>
            <tr style="background-color: #796b5c;">
                <td style="padding: 30px 10px">
                    <b>8:00 - 10:00</b> 
                </td>
                <td style="padding: 30px 10px;">
                    Doručak
                </td>
            </tr>
            <tr style="background-color: #6b2d2f;">
                <td style="padding: 15px 10px">
                    10:00 - 10:45
                </td>
                <td style="padding: 15px 10px"> 
                    Matematička bojanka
                    <br>
                    <i>Marija Cvetković - <b>PMF, Univerztet u Nišu</b></i>
                </td>
            </tr>
            <tr style="background-color: #6b2d2f;">
                <td style="padding: 15px 10px">
                    11:00 - 11:45
                </td>
                <td style="padding: 15px 10px">
                    Uspeh na društvenim mrežama
                    <br>
                    <i>Maja Ognjenović</i>
                </td>
            </tr>
            <tr style="background-color: #b88a52;">
                <td style="padding: 30px 10px">
                    12:00 - 14:00
                </td>
                <td style="padding: 30px 10px">
                    Simulacija intervjua: Yettel
                </td>
            </tr>
            <tr style="background-color: #796b5c;">
                <td style="padding: 30px 10px">
                    14:00 - 16:00
                </td>
                <td style="padding: 30px 10px">
                    Ručak
                </td>
            </tr>
            <tr style="background-color: #6b2d2f;">
                <td style="padding: 15px 10px">
                    16:00 - 16:45
                </td>
                <td style="padding: 15px 10px">
                    Veštačka inteligencija: Rizici i prilike
                    <br>
                    <i><b>Efektivni Altruizam</b></i>
                </td>
            </tr>
            <tr style="background-color: #6b2d2f;">
                <td style="padding: 15px 10px">
                    17:00 - 17:45
                </td>
                <td style="padding: 15px 10px">
                    PANEL DISKUSIJA: <br> Cloud computing: Kako IT menja industriju
                    <br>
                    <i>Srđan Đorđević - <b>Yettel</b></i>
                    <br>
                    <i>Denis Aličić - <b>Matematički fakultet</b></i>
                    <br>
                    <i>Mihailo Vlajković - <b>Inženjer za kompleksne i velike setove podataka</b></i>
                </td>
            </tr>
            <tr style="background-color: #6b2d2f;">
                <td style="padding: 7px 10px">
                    18:00 - 18:30
                </td>
                <td style="padding: 7px 10px">
                    Zatvaranje
                </td>
            </tr>
            <tr style="background-color: #686868;">
                <td style="padding: 7px 10px">
                    18:30 - 19:00
                </td>
                <td style="padding: 7px 10px">
                    PAUZA
                </td>
            </tr>
            <tr style="background-color: #796b5c;">
                <td style="padding: 30px 10px">
                    19:00 - 21:00
                </td>
                <td style="padding: 30px 10px">
                    Večera
                </td>
            </tr>
            <tr style="background-color: #796b5c;">
                <td style="padding: 15px 10px">
                    21:00 -
                </td>
                <td style="padding: 15px 10px">
                    Tematska žurka
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
    table {
        border-collapse: collapse;
        box-shadow: 0 0 10px 10px rgba(0,0,0,0.7);
        border-radius: 30px;
        overflow:hidden;
        margin: 0 auto;
        margin-top: 100px;
        margin-bottom: 100px;
    }

    tr:hover {
        background-color: red;
    }

    th, td {
        text-align: center;
    }
    tr {
        border-bottom: solid 2px #888888;
    }
    tr:last-child {
        border-bottom: none;
    }
    
    td:nth-child(odd) {

        background-color: rgba(0,0,0,0.2);
    }
    td:nth-child(odd) {
    }
    th {
        padding: 15px 10px;
        background-color: #121212;
    }
</style>
