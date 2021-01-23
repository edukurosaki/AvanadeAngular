<html>
    <body>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap');
*{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 font-family: 'Yusei Magic', Arial, sans-serif;   
}
body{
    background: rgb(180, 171, 171);
}
section{
    position: relative;
    width: 100%;
    height: 100vh;
    transform-style: preserve-3d;
    perspective: 500px;
}
section h2{
    position: relative;
    width: 100%;
    height: 100vh;
    font-size: 5vw;
    text-align: center;
    line-height: 100vh;
    color: azure;
    font-weight: 0.5;    
}
.banner{
    position: absolute;
    top: 0;
    left: 0;
    width: 100;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
}
.banner .blocos{
    position: relative;
    display: block;
    width: 10vh;
    height: 10vh;
    animation-delay: 1s;
    animation: animate 2s ease-in-out forwards;
}
@keyframes animate{
    0%
    {
        transform: translateZ(2000px);
        background: url(./imagens/edu.jpeg) no-repeat;
        background-position: center;
        background-attachment: fixed;
        background-size: 900px 900px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 5);
    }
    100%
    {
        transform: translateZ(0px);
        background: url(./imagens/edu.jpeg) no-repeat;
        background-position: center;
        background-attachment: fixed;
        background-size: 900px 900px;
        border: 1px solid rgba(0, 0, 0, 1);
        box-shadow: 0 5px 15px rgb(0, 0, 0, 5);
    }
}
section.active .banner .blocos{
    animation: animate02 2s ease-in-out forwards;
    background: url(./imagens/edu.jpeg) no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: 900px 900px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
    border: 1px solid rgba(0, 0, 0, 0.5)
}
@keyframes animate02{
    0%
    {
        transform: translateZ(0px);
        background: url(./imagens/edu.jpeg) no-repeat;
        background-position: center;
        background-attachment: fixed;
        background-size: 900px 900px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 5);
    }
    100%
    {
        transform: translateZ(2000px);
        background: url(./imagens/edu.jpeg) no-repeat;
        background-position: center;
        background-attachment: fixed;
        background-size: 900px 900px;
        border: 1px solid rgba(0, 0, 0, 1);
        box-shadow: 0 5px 15px rgb(0, 0, 0, 5);
    }
}
</style>
        <section>
            <h2>
            I'M EDUARDO ALVES FRANCISCO
            </h2>
            <div class="banner">
                <div class="blocos"></div>
            </div>
            </section>
     <script>
        const banner = document.getElementsByClassName('banner')[0];
        const blocos = document.getElementsByClassName('blocos');
        for (let index = 0; index < 400; index++) {
            banner.innerHTML += " <div class='blocos'></div>";
            const time = Math.random()*5;
            blocos[index].style.animationDuration = 2+time+'s';
            blocos[index].style.animationDelay = time+'s';
        }
        const section =document.querySelector('section');
        setTimeout(function () {
            section.classList.add('active')
        }, 14000)
    </script>
    </body>
</html>