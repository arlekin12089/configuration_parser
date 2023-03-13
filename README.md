### Configuration parser

Considering the following configuration file (living in `config.txt`):

```text
hostname=example.com
image.width=640
image.height=480
mysql.production.host=10.0.0.1
mysql.production.username=root
mysql.slow_query=200ms
csv.file_separator== 
```

Build a Node.js parser that can read this file and return a JSON structure.

Solution shouldn't use any frameworks, libraries or other dependencies.

Extra points: parse configuration file into a nested structure, like in the following example:
```javascript
{
  image: {
    width: 640,
    height: 480
  }
}
```
