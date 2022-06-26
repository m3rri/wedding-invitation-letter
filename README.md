## 🎉 merry's wedding-invitation-letter 🎈
---
### [welcome merri's DEVELOG](https://m3rri.github.io/blog)
```java
@RestContoller
public class InvitationController {

    @GetMapping(value = "/invitation/{visitor}")
    public ResponseEntity<Map<String, String>> invitation(@PathVariable String visitor){
        Map<String, String> result = new HashMap<>();

        if(visitor.equals("WebDeveloper")){
            result.put("blogLink",      "https://m3rri.github.io/blog");
            result.put("msg",           "Please come and check out the post with the development story 👉");
            result.put("description",   "React,next.js(SSG),github actions");

            return new ResponseEntity<>(result, HttpStatus.OK);
        }else{
            new AppearedDeveloperPretendToBeNonDevelopersException().printStackTrace();
            result.put("msg",           "That can't be true. 🤔");

            return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
        }
    }
}
```