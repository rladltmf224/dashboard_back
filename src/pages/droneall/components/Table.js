import React from 'react';
import Table from 'react-bootstrap/Table';

function DroneInfo() {
  return (
    <div style={{height: "372.99px", overflowY:"scroll"}}>
      <Table striped responsive>
      {/* 여기에 responsive를 해줘야 반응형으로 된다. */}
      {/* 반응형으로 해주니깐 밑에 스크롤이 생기네 */}

        <thead>
          <tr style={{textAlign:"center"}}>
            <th></th>
            <th style={{fontSize:"1rem"}}>Used Battery</th>
            <th style={{fontSize:"1rem"}}>Altitude</th>
            <th style={{fontSize:"1rem"}}>Take off</th>
            <th style={{fontSize:"1rem"}}>Landing</th>
          </tr>
        </thead>

        <tbody>
          <tr style={{textAlign:"center"}}>
            <td>ALPHA</td>
            <td>110m</td>
            <td>OK</td>
            <td>11:40PM</td>
            <td>12:00PM</td>
          </tr>
          <tr style={{textAlign:"center"}}>
            <td>BRAVO</td>
            <td>100m</td>
            <td>OK</td>
            <td>12:00PM</td>
            <td>12:10PM</td>
          </tr>
          <tr style={{textAlign:"center"}}>
            <td>CHARLIE</td>
            <td>120m</td>
            <td>OK</td>
            <td>12:30PM</td>
            <td></td>
          </tr>
          <tr style={{textAlign:"center"}}>
            <td>DELTA</td>
            <td>130m</td>
            <td>OK</td>
            <td>14:00PM</td>
            <td></td>
          </tr>
          <tr style={{textAlign:"center"}}>
            <td>ECHO</td>
            <td>123m</td>
            <td>OK</td>
            <td>14:15PM</td>
            <td></td>
          </tr>





          <tr style={{textAlign:"center"}}>
            <td>ECHO</td>
            <td>123m</td>
            <td>OK</td>
            <td>14:15PM</td>
            <td></td>
          </tr>
          <tr style={{textAlign:"center"}}>
            <td>ECHO</td>
            <td>123m</td>
            <td>OK</td>
            <td>14:15PM</td>
            <td></td>
          </tr>
          <tr style={{textAlign:"center"}}>
            <td>ECHO</td>
            <td>123m</td>
            <td>OK</td>
            <td>14:15PM</td>
            <td></td>
          </tr>

            <tr style={{textAlign:"center"}}>
            <td>ECHO</td>
            <td>123m</td>
            <td>OK</td>
            <td>14:15PM</td>
            <td></td>
          </tr>
          <tr style={{textAlign:"center"}}>
            <td>ECHO</td>
            <td>123m</td>
            <td>OK</td>
            <td>14:15PM</td>
            <td></td>
          </tr>
          <tr style={{textAlign:"center"}}>
            <td>ECHO</td>
            <td>123m</td>
            <td>OK</td>
            <td>14:15PM</td>
            <td></td>
          </tr>


        </tbody>

      </Table>
    </div>
  );
}

export default DroneInfo;