import Student from "./student";

function NestedLoop() {
  const CollegeData = [
    {
      Name: "NIT",
      City: "USA",
      Website: "www.nit.com",
      Student: [
        {
          Name: "Sayma",
          Age: "30",
        },
      ],
    },
    {
      Name: "IIT",
      City: "Delhi",
      Website: "www.iit.com",
      Student: [
        {
          Name: "Suhaan",
          Age: "10",
        },
      ],
    },
    {
      Name: "BIT",
      City: "Ranchi",
      Website: "www.bit.com",
      Student: [
        {
          Name: "Rehaan",
          Age: "8",
        },
      ],
    },
    {
      Name: "Harvard",
      City: "UK",
      Website: "www.harvard.com",
      Student: [
        {
          Name: "Sajid",
          Age: "40",
        },
      ],
    },
  ];

  return (
    <div>
      <h3>Nestes Loop</h3>
      {
      CollegeData.map((College, index) => (
        <div key={index}>
             <h4>College Name: {College.Name}</h4>
          <ul>
            <li>
              <h4>City: {College.City}</h4>
            </li>

            <li>
              <h4> Website: {College.Website}</h4>
            </li>
          </ul>
         
        </div>
      ))}
     <Student />
      
    </div>
  );
}
export default NestedLoop;
