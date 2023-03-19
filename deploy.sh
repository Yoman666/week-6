# #!/usr/bin/env sh

# # abort on errors
# set -e

# # build
# npm run build

# # navigate into the build output directory
# cd dist

# # if you are deploying to a custom domain
# # echo 'www.example.com' > CNAME

# git init
# git checkout -b main
# git add -A
# git commit -m 'deploy'

# # if you are deploying to https://yoman666.github.io
# # git push -f git@github.com:yoman666/yoman666.github.io.git main
# # git push -f https://github.com/Yoman666/week-6.git main

# # if you are deploying to https://yoman666.github.io/week-6
# git push -f https://github.com/Yoman666/week-6.git main:gh-pages


# cd -

#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://FiReBrO42.github.io
# git push -f git@github.com:FiReBrO42/FiReBrO42.github.io.git main

# if you are deploying to https://FiReBrO42.github.io/vue-hk-week6
git push -f https://github.com/Yoman666/week-6.git main:gh-pages

cd -