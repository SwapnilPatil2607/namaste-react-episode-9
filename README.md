# Namaste React episode 8

# key points

1. class based component
2. Flow

   - Parent constructor is called
   - Parent render is called
   - Child constructor is called
   - Child render is called
   - Child didmount is called
   - Parent didmount is called

3. This flow happens like this because of optimization of react which batches the render phase and commit phase differently
   - eg below
   - constructor and render of components are called first
   - and didMounts batch of those components called later after DOM manipulation is done.
   - chech this site for more info https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
