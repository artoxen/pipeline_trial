function updateqty(btid)
{
    let qtid= "qt"+btid.charAt(2);
    let qtele= document.getElementById(qtid);
    let qtval= Number(qtele.innerText);
    if(btid.charAt(3)==='p')
    {
        qtval=qtval+1;
        qtele.innerText=qtval;
    }
    else
    {
        if(qtval!=0)
        {
            qtval=qtval-1;
            qtele.innerText=qtval;
        }
    }
}
function gotocart()
{
    let cartpage= document.getElementsByClassName("cartpage")[0];
    let itempage= document.getElementsByClassName("itempage")[0];
    let list="";
    let payableamt=0;
    for(let i=1;i<=5;i++)
    {
        let qtid= "qt"+i;
        let qtele= document.getElementById(qtid);
        let qtval= Number(qtele.innerText);
        if(qtval>0)
        {
            let prd= document.getElementById("prd"+i).innerText;
            let qty= Number(document.getElementById("qt"+i).innerText);
            let pricetxt= document.getElementById("prc"+i).innerText;
            let len= pricetxt.length;
            let price= Number(pricetxt.substring(0,len-1));
            let totalprice= qty*price;
            payableamt=payableamt+totalprice;
            list=list+"<tr><td>"+prd+"</td><td>"+qty+"</td><td>"+totalprice+"$</td></tr>";
        }
    }
    list= list+'<tr style="font-size: 20px; font-weight: bold;"><td colspan="2">Total</td><td colspan="1">'+payableamt+'$</td></tr>';
    let cartcontainer= document.getElementById("cartcontainer");
    cartcontainer.innerHTML=list;
    itempage.style.display="none";
    cartpage.style.display="flex";
}

function gotoitems()
{
    let cartpage= document.getElementsByClassName("cartpage")[0];
    let itempage= document.getElementsByClassName("itempage")[0];
    cartpage.style.display="none";
    itempage.style.display="flex";
}

function purchase()
{
    Email.send({
        Host: "smtp.gmail.com",
        Username: "aamangupta789@gmail.com",
        Password: "amanscooty",
        To: 'kartikp121.kp@gmail.com',
        From:"aamangupta789@gmail.com",
        Subject:"Shopping List",
        Body: "Thankyou for purchasing Items from our store",
    }).then(function(message){
        console.log(message);
        alert("mail sent successfully");
    });
}