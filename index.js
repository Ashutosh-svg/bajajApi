const app=require("express")();
const port=process.env.PORT || 8080;
app.listen(port);
const cors=require("cors")();
const bodyParser=require("body-parser");
var url=bodyParser.urlencoded({extended:false});
app.use(bodyParser.json());
app.post("/bfhl",url,(req,res)=>{
    a=req.body.data;
    f=true
    numbers=[];
    alphabets=[];
    number_idx=0;
    alphabets_idx=0;
    for(i=0;i<a.length;i++)
    {
        check=false;
        x=parseInt(a[i]);
        if(isNaN(x))check=true;
        if(check)
        {
            alphabets[alphabets_idx++]=a[i];
        }
        else{
            numbers[number_idx++]=x;
        }
    }
    answer={
        is_success:f,
        user_id:"ashutosh_singh_yadav_30072001",
        email:"ashutoshyadavry3107@gmail.com",
        roll_number:"0827CS191057",
        "numbers":numbers,
        "alphabets":alphabets
    }
    res.json(answer);
});