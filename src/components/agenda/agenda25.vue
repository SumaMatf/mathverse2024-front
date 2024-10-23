<template>
    <table>
        <thead>
            <tr>
                <th style="border-bottom: 2px solid #454545;">Vreme</th>
                <th style="border-left: 2px solid #454545; border-bottom: 2px solid #454545;">Događaj</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 30px 10px">
                    <b>9:00 - 11:00</b> 
                </td>
                <td style="padding: 30px 10px;">
                    Doručak
                </td>
            </tr>
            <tr>
                <td style="padding: 15px 10px">
                    11:00 - 12:00
                </td>
                <td style="padding: 15px 10px" class="checkin"> 
                    Matematička Bojanka - Marija Cvetković
                </td>
            </tr>
            <tr>
                <td style="padding: 30px 10px">
                    12:00 - 13:00
                </td>
                <td style="padding: 30px 10px">
                    Simulacije
                </td>
            </tr>
            <tr>
                <td style="padding: 15px 10px">
                    16:00 - 17:00
                </td>
                <td style="padding: 15px 10px">
                    Odmor
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
    }

    tr:hover {
        background-color: red;
    }

    th, td {
        text-align: center;
        width: 150px;
    }
    tr:nth-child(even) {
        background-color: #171616;
    }
    tr:nth-child(odd) {
        background-color: #232323;
    }
    td:nth-child(even) {
        border-left: 2px solid #454545;
    }
    th {
        padding: 15px 10px;
        background-color: #121212;
    }
</style>
