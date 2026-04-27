import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";

import { getPosts } from "@/database/postdb";

const ServerActionPage = () => {
  const posts = getPosts();

  return (
    <div>
      {/* form */}
      <Form className="w-full max-w-96 mx-auto border rounded-b-lg border-l-4 border-l-blue-700 mt-12 p-3">
        <Fieldset>
          <Fieldset.Legend>Add New Post</Fieldset.Legend>
          <Description>Update your profile information.</Description>
          <FieldGroup>
            <TextField isRequired name="title">
              <Label>Title</Label>
              <Input placeholder="post title" />
              <FieldError />
            </TextField>
            <TextField isRequired name="description" type="text">
              <Label>Description</Label>
              <Input placeholder="post body or desciption" />
              <FieldError />
            </TextField>
          </FieldGroup>
          <Fieldset.Actions>
            <Button type="submit">
              <FloppyDisk />
              Save changes
            </Button>
            <Button type="reset" variant="secondary">
              Cancel
            </Button>
          </Fieldset.Actions>
        </Fieldset>
      </Form>

      <div className="grid grid-cols-2 gap-2 m-2">
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-800 text-white space-y-2 p-2">
            <h2 className="text-lg font-bold">{post.title}</h2>
            <p className="text-xs">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServerActionPage;
