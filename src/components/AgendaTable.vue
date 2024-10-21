<template>
    <table class="tabela">
        <thead>
            <tr>
                <th style="background-color: black;"></th>
                <th class="dan">Četvrtak</th>
                <th class="dan">Petak</th>
                <th class="dan">Subota</th>
                <th class="dan">Nedelja</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="vreme">09-11</td>
                <td rowspan="3" style="background-color: #a8e4a0;">Put (Dolazak)</td>
                <td class="obrok">Doručak</td>
                <td class="obrok">Doručak</td>
                <td class="obrok">Doručak</td>
            </tr>
            <tr>
                <td class="vreme">11-12</td>
                <td class="aktivnost">Marija Cvetković</td>
                <td class="aktivnost">Marko Spasić</td>
                <td class="aktivnost">Check-out</td>
            </tr>
            <tr>
                <td class="vreme">12-13</td>
                <td class="aktivnost">Petar Veličković/Simulacije</td>
                <td class="aktivnost">Mara Ognjanović</td>
                <td rowspan="8" style="background-color: #a8e4a0;">Put za Beograd (Izlet)</td>
            </tr>
            <tr>
                <td class="vreme">13-14</td>
                <td class="aktivnost">Check-In</td>
                <td class="aktivnost">Simulacije</td>
                <td class="aktivnost">Simulacije</td>
            </tr>
            <tr>
                <td class="vreme">14-16</td>
                <td class="obrok">Ručak</td>
                <td class="aktivnost">Rućak/Simulacije(15-16)</td>
                <td class="aktivnost">Ručak/Simulacije(14-15)</td>
            </tr>
            <tr>
                <td class="vreme">16-17</td>
                <td class="odmor">Odmor</td>
                <td class="aktivnost" rowspan="2">Simulacije/Case Study SUMA</td>
                <td class="aktivnost">Altruisti</td>
            </tr>
            <tr>
                <td class="vreme">17-18</td>
                <td class="aktivnost">Otvaranje</td>
                <td class="aktivnost">Panel diskusija</td>
            </tr>
            <tr>
                <td class="vreme">18-19</td>
                <td class="aktivnost">Mozzart predavanje</td>
                <td class="aktivnost">Panel diskusija</td>
                <td class="aktivnost">Zatvaranje</td>
            </tr>
            <tr>
                <td class="vreme">19-21</td>
                <td class="obrok">Večera</td>
                <td class="obrok">Večera</td>
                <td class="obrok">Večera</td>
            </tr>
            <tr>
                <td class="vreme">21-</td>
                <td class="odmor">Karaoke</td>
                <td class="odmor">Pub Kviz</td>
                <td class="odmor">Žurka & Beer Pong</td>
            </tr>
        </tbody>
    </table>
</template>
  
<script>
    export default {
        name: 'Tabela',
    }
</script>
  
<style scoped>

.odmor {
    background-color: #e5ac65;
}

.aktivnost {
    background-color: #88383b;
}

.obrok {
    background-color: #93894c;
}

.vreme{
    background-color: #383838;
    font-weight: bold;
}

.dan {
    background-color: #383838;
}

.tabela {
    color: #101010;
    width: 100%;
    border-collapse: collapse;
    
    td {
        padding: 12px;
        border: 1px solid #ddd;
    }

    thead {
      th {
        padding: 12px;
        text-align: center;
      }
    }
  }

  
</style>