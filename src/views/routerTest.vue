<template>
     <div id="app">
         <div id='tmp1'>
        <template>
            <h1>这是Account组件</h1>
            <router-link to='/account/login2'>登陆</router-link>
            <router-link to="/account/register2">注册</router-link> 
            <router-view></router-view>
        </template>
    </div>
    </div> 
   
</template>
   
    <script>
        var account = {
            template: '#tmp1'
        }
        var login = {
            template:'<h3>登陆</h3>'
        }
        var register = {
            template:'<h3>注册</h3>'
        }
        
    
    </script>