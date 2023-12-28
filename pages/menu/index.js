import MenuPage from '../../component/templates/MenuPage'
function index({data}) {
  return (
    <div>
      <MenuPage data={data}/>
    </div>
  )
}

export default index
export async function getStaticProps() {
    const res = await fetch('http://localhost:4000/data');
    const data = await res.json();
    return{
        props:{data},
        revalidate:10,
    };
}