import React from 'react';

import '../Style/Mission.css';

const Missions = () => {
    const missions = useSelector((state) => state.mission);
    const dispatch = UseDispatch();

   return(
  <table>
    <tr>
      <th className="#">Mission</th>
      <th className="#">Description</th>
      <th className="#">Status</th>
      <th className="#">Join missions</th>
    </tr>

    <tr>
      <td />
      <td />
      <td>
        <div>Ative Member</div>
        <div>None Active Member</div>
      </td>
      <td>
        <button type="submit" className="Button-btn" value="#" />
      </td>
    </tr>
  </table>
);
   }

export default Missions;
