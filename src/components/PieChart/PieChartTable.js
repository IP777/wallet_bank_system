import React from "react";

const PieChartTable = (props) => (
  <table class="info__table">
    <tbody>
      <tr class="info__table--raw">
        <td class="info__table--cell">vote/votes</td>
        <td class="info__table--cell">
          {{ vote_average }}/{{ vote_count }}
        </td>
      </tr>
      <tr class="info__table--raw">
        <td class="info__table--cell">popularity</td>
        <td class="info__table--cell">{{ popularity }}</td>
      </tr>
      <tr class="info__table--raw">
        <td class="info__table--cell">original title</td>
        <td class="info__table--cell">{{ original_title }}</td>
      </tr>
      <tr class="info__table--raw">
        <td class="info__table--cell">genre</td>
        <td class="info__table--cell">{{ genres }}</td>
      </tr>
    </tbody>
  </table>
);

export default PieChartTable;
