## auth
1. get currently auth user
2. fetch the user document -> reverse mapping

set up auth data in global context to reduce reads 

context api -> share data throughout component tree

lib -> context.js -> common place to import context -> exports a default value

useAuthstae -> listen to current signed in user from firebase

useEffect hook -> listen to user obj
