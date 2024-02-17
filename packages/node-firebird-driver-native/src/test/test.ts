import { createNativeClient, getDefaultLibraryFilename } from '../lib';

import { runCommonTests } from '@knagyorg/node-firebird-driver/dist/test/tests';

const client = createNativeClient(getDefaultLibraryFilename());

runCommonTests(client);
