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
                <td style="padding: 15px 10px">
                    <b>8:00 - 9:00</b> 
                </td>
                <td style="padding: 15px 10px;">
                    Doručak
                </td>
            </tr>
            <tr style="background-color: #796b5c;">
                <td style="padding: 15px 10px">
                    <b>9:00 - 10:00</b> 
                </td>
                <td style="padding: 15px 10px;">
                    Check-out
                </td>
            </tr>
            <tr style="background-color: #796b5c;">
                <td style="padding: 15px 10px">
                    <b>10:00 -</b> 
                </td>
                <td style="padding: 15px 10px;">
                    Povratak za Beograd + Izlet za Vrnjačku Banju
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
