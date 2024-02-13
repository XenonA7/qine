## v0.3.0 (12-Feb-2024) - XenonA7 unofficial
  * Moved mod files to root directory
  * Changelog is now .md
  * Created mod icon
  * Replaced package.json with new ccmod.json
  * Updated dependency for extendable-severed-heads 1.1.0
  * Reformatted headIdx.json.patch and Qine enemy file to use string headIdx
  * Reformatted \config\bgm\track-list.json into **track-list.js**, imported in mod.js
  * Renamed commonEvent "arena-teleport" to "qine-teleport" to fix a conflict
  * Deleted commonEvent "qineLoad" from database.json.patch
  * Added commonEvent "qine-load" to qine-events.json
  * Removed unused patch steps from database.json.patch
  * Qine duel enemy now scales to player level
  * Qine duel enemy EXP drop changed from 1000 to 0
  * Commented out the code related to "no-contact" in mod.js
  * Added enemy "qine2", which is a version without camera steps and dialogue support for external use

v0.2.7 (27-Nov-2019)
  * Tweaks to the metadata to play better with CCModDB, courtesy of 20kdc.
  * Another dependency fix courtesy of ac2pic.

v0.2.6 (26-Sep-2019)
  * Fix up mod dependencies, courtesy of ac2pic.

v0.2.5 (03-Aug-2019)
  * Now uses / depends on extendable-severed-heads, courtesy of ac2pic.

v0.2.4 (28-Jul-2019)
  * Some code cleanup courtesy of ac2pic. Likely now requires an up-to-date
    version of CCLoader (tested with v2.11.3).

v0.2.3 (14-Jul-2019)
  * Fix Qine-as-party-member's combat arts to not be interrupted by Qine
    guarding against attacks.

v0.2.2 (20-May-2019)
  * Fix Contacting Qine showing "But nobody came."

v0.2.1 (15-May-2019)
  * Updated code for CrossCode v1.1.0.

v0.2.0 (19-Apr-2019)
  * Theme music and battle music, courtesy of ac2pic's Custom Music
    Loader.
  * Adjusted behaviour when Qine's guard is broken - instead of an extra
    long stun, it is now a normal length stun, and Qine cannot use his
    shield for several seconds afterwards.

v0.1.3 (01-Apr-2019)
  * Qine has a new equipment set, primarily meaning he is capable of dealing
    more damage; this applies to both party Qine and PvP Qine.
  * Fixed the stun behaviour of Freezing Blow.

v0.1.2 (31-Mar-2019)
  * Qine can be guard broken.
  * Qine will more aggressively attempt a follow-up after guard countering
    the player.

v0.1.1 (30-Mar-2019)
  * Qine will refuse to fight you if you have party members (avoids a crash).
  * The stun cancel message is no longer overwritten incorrectly.

v0.1.0 (24-Mar-2019)
  * Qine now has a variety of Quadroguard-specific techs, including:
    * Neutral dash: Incite, drawing enemies' attention to Qine on a one-off
      basis;
    * Neutral throws: Ball of Shield, which hurls a shield which knocks back
      opponents, and Ball of Boom, which explodes on contact, throwing
      enemies everywhere;
    * Neutral guard: Blast Box, combining a shield with several proximity
      blasts;
    * Heat dashes: Torchbringer, which continually draws enemies' attention
      for five seconds, and Flamebringer, which also adds a trail of flame
      to hurt enemies that try to folow;
    * Cold melee: Chilling Blow, Freezing Blow, and Ice Age, which force
      enemies back and impair them for several seconds;
    * Cold throw: Final Flawke, which hurls a snowball that breaks into
      several smaller snowballs, leaving icicles everywhere;
    * Shock dashes: Charge Coil, Tesla Tower, and Gaussian Grid, which
      drop spikes that zap enemies that draw near them; and
    * Wave throws: Repel, Mass Repel, and Irresistible Force, which blast
      enemies back a considerable distance.
  * In addition, Qine can use Warp Decoy and Toxic Revenant.
  * Qine is now capable of guard countering the player.

v0.0.5 (10-Mar-2019)
  * A brand new portrait, by rioreur (with facial expression art by me).
  * Field sprites have had their hair redone.

v0.0.4.3 (16-Dec-2018):
  * Actually include the head icon.

v0.0.4.2 (12-Dec-2018):
  * Qine now has a head icon (at last!).

v0.0.4.1 (12-Dec-2018):
  * Adjust displayed real name to be more consistent with other party
    members.
  * Internal rework of some of the party member initialisation to be more
    robust.

v0.0.4 (10-Dec-2018):
  * Qine is now added to the party menu on load, and can be Contacted to
    teleport to the arena.
  * Assorted battle dialogue for Qine.

v0.0.3.1 (09-Dec-2018):
  * Small adjustment to Qine-as-party-member's guard / dash logic.

v0.0.3 (09-Dec-2018):
  * Qine is now available as a party member.

v0.0.2 (08-Dec-2018):
  * Swapped out some of the more obviously sphere effects (Sphere Saw/Storm,
    Guard/Blade Sphere, residual guard shields from Cold lv2/3 guards) with
    more Quadroguard-appropriate effects.

v0.0.1 (08-Dec-2018):
  * Initial revision.
