const fetchapi = async (url,aption={})=>{
    try{
        const res = await fetch(url,aption);
        const data = await res.json();
        return data;
    }catch(err){
        alert(err);
    }
}
export default fetchapi;