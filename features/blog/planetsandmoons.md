
---
slug: mdx-blog-post
title: planets & moons 
authors: [slorber]
tags: [docusaurus]
---


Introduction

In software development the term design pattern is a useful appellation for a reoccurring issue that was dealt with haphazardly (often by boiler-plate machinations) but is now understood well enough to get a systematized solution and label.

Planet & moons is a design pattern unique to PAL; no coding language has ever conceived of this feature let alone implemented it.

What they are

The planet is the main function which takes some input arguments and produces some outputs. When the input arguments need to be managed (often to increase invocation clarity) or when the function needs to be modified, then moons are used. Whenever a planet is created, all its moons are defined with it at the same time.

The moons are specialized local functions, which act as either adverbs, or as adjectives. When used as adjectives, they qualify the inputs to their planet; they group, categorize, and describe their planet function’s argument list. Moons only become visible when their planet is invoked, since they are proximity based.

The reason for the specific terms ‘planet’ and ‘moons’ are:

Moons are local to the planet they orbit; their names only come into scope through proximity of the planet they are nearest to. Outside of the orbit of their planet, moons are invisible.

The planet is big because moons orbit it, not the other way around; it is the influencer, and dictates the meanings of the local moons around it.

Moons are small because there can be many of them, and they all get their prescribed meaning from the planet they orbit.

The scope of the moons lie in “the shadow’’ of their planet; if their planet function isn’t nearby, the moons become invisible to the current scope. If a moon so happens to have the same name as some other entity in a wider contextual scope, then its locally (planetary proximity dictated) prescribed meaning takes precedence, and over-rides the outer scope meaning.

Why we need them

To aid comprehension, we need to appreciate the need that planet & moons fill. This is best achieved with a concrete example.

Imagine a function called rotate, that takes 8 arguments for its input, and outputs a tuple of 3 values, and all 8 inputs are of the same data type; which is the default numeric Real. Invoking would look like this in source-code:

x, y, z ← rotate(x, y, z, X, Y, Z, theta, phi)

We will now zoom in on the actual function call; no longer showing its output being captured by the assignment statement. So now we simply have:

rotate(x, y, z, X, Y, Z, theta, phi)

Excluding the fact it outputs a tuple, this could be done in almost any coding language.

The question is: how far can we improve our code to explicate the meaning (purpose and intent) of this function invocation?

We can use white space to meaningfully segregate the various function arguments:

rotate(x, y, z, X,Y,Z, theta, phi)

which helps a bit.

More significantly we can replace the tacit arguments with meaningful names. Something like:

rotate(x, y, z, X_origin, Y_origin, Z_origin, theta, phi)

In any other language we would have now reached the end of the road; since no more improvements to readability can be done.

But not for us; with PAL we can employ source–hinting to take us further, like a Sherpa guide, up the mountain of clarity. We can insert explanatory words (in this case, round and by) to give us:

rotate(x, y, z, ‹round› X_origin, Y_origin, Z_origin, ‹by› theta, phi)

In fact, we can now increase clarity by reverting back to using the shorter tacit argument names again:

rotate(x, y, z, ‹round› X, Y, Z, ‹by› theta, phi)

We are not done yet, because PAL also provides us with an extended (and extensible) glyph range for symbol names, so we can replace the ‘‘theta’’ and ‘‘phi’’ with shorter names while boosting clarity. Heck while we are at it, we can also come up with better names for the ‘X’, ‘Y’, and ‘Z’ too:

rotate(x, y, z, ‹round› χ, ƴ, ȥ, ‹by› θ, ϕ)

Lastly, since we are permitted relaxed–functions, we can ditch the function parenthesis, since they aren’t really earning their keep. Which brings us to:

rotate x, y, z, ‹round› χ, ƴ, ȥ, ‹by› θ, ϕ

We could go further and omit all those comas too, but we will stop here.

So in the journey of elucidating our use of this rotate function, it would seem no more can be done to enhance readability.

But we have not reached the summit; there remain some arbitrary limitations to what we have achieved:

What if we want to be able to omit more than one argument by being able to rely on some default values being provided to this function? (Remember that it was stated earlier that ALL the input arguments to this function are of the SAME data type; this would normally mean that only the last function argument can be specified to be an optional parameter.)

Why not be able to change the invocation order of the arguments? For example, maybe it would look nicer to specify the rotation angles: (θ ϕ) prior to specifying the pivot coordinate: (χ ƴ ȥ).

The only way forward now, is through use of the planet & moons facility.

How to make them

We will now define or extend our function to be a planet, with associated moon functions.

This is easily done, like so:

▪ rotate (x y z) round (χ ƴ ȥ) by (θ ϕ) ───‣ (x y z) ◌ ◌ ◌

In the above definition, the planet function is rotate, and it has 2 moons: by and around; which both gather and label the parameters. (The dotted–circle glyph represents folded code from the IDE editor.)

This now gifts us a choice of calling our rotate function with two alternative orderings of its arguments.

We can still invoke the way we did before, with the rotation angles supplied as the last arguments:

rotate x, y, z round χ, ƴ, ȥ by θ, ϕ

Or we can now choose to invoke by specifying the rotation angles ahead of the pivot coordinate point:

rotate x, y, z by θ, ϕ round χ, ƴ, ȥ

We can still proceed further by adding another moon to gather the arguments that we were giving directly to the planet itself, by minting the signature this way:

▪ rotate point(x y z) round (χ ƴ ȥ) by (θ ϕ) ───‣ (x y z) ◌ ◌ ◌

So we can now re-order THREE groups of arguments instead of simply two. For example, we now have the freedom to invoke it this way:

rotate by θ, ϕ point x, y, z round χ, ƴ, ȥ

with the rotation angles being specified first, followed by the point we want to rotate, with the pivot point being specified last.

Or we can invoke this way:

rotate by θ, ϕ round χ, ƴ, ȥ point x, y, z

With the coordinate point we intend to rotate coming dead last in the argument list. Etc.

Not that all of these options are equally good, but the point is that we DO have a choice!

Now, how about being able to use our rotate function with omitted arguments? This is easily achieved by specifying which arguments can be omitted. We can do this on a moon by moon basis:

To Be Continued …

