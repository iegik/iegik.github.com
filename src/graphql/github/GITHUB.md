### Create empty branch

```
git switch --orphan <new branch>
git commit --allow-empty -m "Initial commit on orphan branch"
git push -u origin <new branch>
```

### Data format

```sh
echo '{"children": ["Hello, World!"]}' | base64
```

### Links

- https://stackoverflow.com/questions/11301989/github-api-create-commit
- https://gist.github.com/MichaelCurrin/6777b91e6374cdb5662b64b8249070ea