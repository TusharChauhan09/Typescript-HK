// 5. Exclude  : opposite of picks  

type eventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<eventType, 'scroll'>;       // only pick  'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK

