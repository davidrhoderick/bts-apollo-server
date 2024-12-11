import type { DocumentNode } from 'graphql';
  export const typeDefs = {"kind":"Document","definitions":[{"name":{"kind":"Name","value":"Query"},"kind":"ObjectTypeDefinition","fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"getUser"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User"}}},"directives":[]}],"directives":[],"interfaces":[]},{"name":{"kind":"Name","value":"Mutation"},"kind":"ObjectTypeDefinition","fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"createUserInput"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}},"directives":[]}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User"}}},"directives":[]}],"directives":[],"interfaces":[]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"User"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"name"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"age"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"CreateUserInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"name"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"age"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]}]},{"kind":"SchemaDefinition","operationTypes":[{"kind":"OperationTypeDefinition","type":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"operation":"query"},{"kind":"OperationTypeDefinition","type":{"kind":"NamedType","name":{"kind":"Name","value":"Mutation"}},"operation":"mutation"}]}]} as unknown as DocumentNode