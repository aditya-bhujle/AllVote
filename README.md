# Bridge
>Bridge is an cross platform Android, iOS, and web application build in React Native
>to provide information about polling locations, requirements to vote, and candidate information.
<p align="center">
  <img src="bridge_design-min.png">
</p>

## How to contriubute
> create a branch with your name followed by "/" and then short disruption of the feature you are adding 
> example: "Ivan/infinite-scroll-on-ballotpage"

1. create a new branch with following the guidelines above
2. Clone the repo
```sh
git clone https://github.com/aditya-bhujle/Bridge.git
```
3. Check out your branch
```sh
git checkout Ivan/infinite-scroll-on-ballotpage 
```
4. Install NPM packages
```sh
npm install
```
### Committing changes to branch
```sh
git add *
git commit -m "Explanation of what you did"
git push origin Ivan/infinite-scroll-on-ballotpage 
```

## Watchman fix

Sometimes watchman breaks, use these commands to fix it.
```sh
echo 256 | sudo tee -a /proc/sys/fs/inotify/max_user_instances
echo 32768 | sudo tee -a /proc/sys/fs/inotify/max_queued_events
echo 65536 | sudo tee -a /proc/sys/fs/inotify/max_user_watches
watchman shutdown-server
```


