import { Rarity, Attributes, uncommon } from '..';

/**
 * Creates shirt with the given parameters.
 * @category Equipment
 */
export class Shirt {
  /**
   * Determines the rarity of the shirt.
   */
  public rarity: Rarity;
  /**
   * Determines the name of the shirt.
   */
  public name: string;
  /**
   * Determines the description of the shirt.
   */
  public description: string;
  /**
   * Determines the attributes of the shirt.
   * @see {@link Attributes | Attributes class} for more details.
   */
  public attributes: Attributes;
  public constructor(rarity: Rarity = uncommon, name = 'Shirt', description = 'A shirt', attributes: Attributes = new Attributes()) {
    this.rarity = rarity;
    this.name = name;
    this.description = description;
    this.attributes = attributes;
  }
}
