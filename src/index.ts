#!/usr/bin/env node

import { prowlingCat } from "./prowling-cat";

prowlingCat(() => Math.round(Math.random() * 20) + 1 !== 5, // animate frames as long as random number is not 5
    () => console.log('done'))