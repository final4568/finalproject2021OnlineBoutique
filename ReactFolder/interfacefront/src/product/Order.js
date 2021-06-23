const Order = () => {
    return ( 
        <>
        <div className="container" style={{marginTop:"30px", marginBottom:"50px"}}>
        <table class="table">
    <thead>
    <tr class="table-dark">
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
<div className="container">
    <p style={{
        fontStyle:"italic",
        color:"#ff318e",
        textAlign:"right"
    }}>Developed By Group 10</p>
</div>
        </>
     );
}
 
export default Order;